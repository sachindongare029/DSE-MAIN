import React from "react";
import { HashRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import Routes from "../routes/Routes";
import { IntlProvider } from "react-intl";
import messages from "../assets/Local/messages";
import { MaterialSnackbar } from "../components/Snackbar/Snackbar";
import Loader from "../components/Loader/Loader";
import "./App.scss";
import { connect } from "react-redux";
import { setCurrentLang } from "../store/Lang/LangAction";
import { setAnnouncement } from "../store/Announcement/AnnouncementAction";
import { axiosInstance } from "../network/apis/index";

class App extends React.Component {
  componentDidMount() {
    axiosInstance
      .get("/getSettingDetails")
      .then((res) => this.props.setAnnouncement(res.data.setting))
      .catch((error) => console.log("error ", error));
  }
  render() {
    const { lang, loading } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div
          className={lang === "ar" ? "rtl" : "ltr"}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {loading ? <Loader /> : null}
          <HashRouter>
            <MaterialSnackbar />
            <Routes lang={lang} />
          </HashRouter>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ lang, loading }) => ({
  lang,
  loading,
});
const mapDespatchToProps = (dispatch) =>
  bindActionCreators({ setCurrentLang, setAnnouncement }, dispatch);

export default connect(mapStateToProps, mapDespatchToProps)(App);
