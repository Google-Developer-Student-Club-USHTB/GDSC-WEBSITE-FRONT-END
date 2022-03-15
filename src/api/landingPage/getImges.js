import imgLogoSymbolOnly from "../../resources/images/logo/logo.png";
import imgLogoWithTypo from "../../resources/images/logo/logo-typo.png";
import imgHero from "../../resources/images/hero/bg-home.png";
import imgFieldWeb from "../../resources/images/fieldsOfWork/web-dev.png";
import imgFieldMobile from "../../resources/images/fieldsOfWork/mobile-dev.png";
import imgFieldAi from "../../resources/images/fieldsOfWork/ai.png";
import imgFieldCyber from "../../resources/images/fieldsOfWork/cyber-security.png";
import imgFieldGame from "../../resources/images/fieldsOfWork/game-dev.png";
import imgLeftSide from "../../resources/images/leftRightSide/left-side.png";
import imgRightSide from "../../resources/images/leftRightSide/right-side.png";
import imgDeviderContact from "../../resources/images/deviderBanner/bg-contact-us.png";
import imgDeviderEvent from "../../resources/images/deviderBanner/bg-our-evetns.png";
import imgDeviderField from "../../resources/images/deviderBanner/bg-our-fields.png";
import imgDeviderProject from "../../resources/images/deviderBanner/bg-our-projects.png";
import imgDeviderTeam from "../../resources/images/deviderBanner/bg-our-team.png";
import imgEventLhc from "../../resources/images/events/local-hack-day.png";
import imgEventHc from "../../resources/images/events/hash-code.png";
import imgEventKs from "../../resources/images/events/kick-start.png";
import imgMember from "../../resources/images/team/pic-rec.png";
import imgProject from "../../resources/images/projects/mobile-dev-project.png";
import imgTrustedBy from "../../resources/images/trustedBy/trustedBy.png";
import imgContactUs from "../../resources/images/constactUs/pic-contact-us.png";
import imgFooter from "../../resources/images/footer/footer-img.png";
import iconSquareFacebook from "../../resources/images/icons/Icon-awesome-facebook-square.svg";
import iconSquareInstagram from "../../resources/images/icons/Icon-awesome-instagram.svg";
import iconSquareTwitter from "../../resources/images/icons/Icon-awesome-twitter-square.svg";
import iconSquareDiscord from "../../resources/images/icons/Icon-awesome-discord.svg";
import iconSquareGithub from "../../resources/images/icons/Icon-awesome-github-square.svg";
import iconSquareLinked from "../../resources/images/icons/Icon-awesome-linkedin.svg";
import iconSquareCalendar from "../../resources/images/icons/Icon-awesome-calendar-alt.svg";
import iconMemberTwitter from "../../resources/images/icons/icon-twitter-member.svg";
import iconMemberInsta from "../../resources/images/icons/icon-insta-member.svg";
import iconMemberLinked from "../../resources/images/icons/icon-linkedin-member.svg";

export const getImage = (image) => {
  switch (image) {
    case "imgLogoSymbolOnly":
      return imgLogoSymbolOnly;
    case "imgLogoWithTypo":
      return imgLogoWithTypo;
    case "imgHero":
      return imgHero;
    case "imgFieldWeb":
      return imgFieldWeb;
    case "imgFieldMobile":
      return imgFieldMobile;
    case "imgFieldAi":
      return imgFieldAi;
    case "imgFieldCyber":
      return imgFieldCyber;
    case "imgFieldGame":
      return imgFieldGame;
    case "iconSquareFacebook":
      return iconSquareFacebook;
    case "iconSquareInstagram":
      return iconSquareInstagram;
    case "iconSquareTwitter":
      return iconSquareTwitter;
    case "iconSquareDiscord":
      return iconSquareDiscord;
    case "iconSquareGithub":
      return iconSquareGithub;
    case "iconSquareLinked":
      return iconSquareLinked;
    case "iconSquareCalendar":
      return iconSquareCalendar;
    case "iconMemberTwitter":
      return iconMemberTwitter;
    case "iconMemberInsta":
      return iconMemberInsta;
    case "iconMemberLinked":
      return iconMemberLinked;
    case "imgLeftSide":
      return imgLeftSide;
    case "imgRightSide":
      return imgRightSide;
    case "imgDeviderContact":
      return imgDeviderContact;
    case "imgDeviderEvent":
      return imgDeviderEvent;
    case "imgDeviderField":
      return imgDeviderField;
    case "imgDeviderProject":
      return imgDeviderProject;
    case "imgDeviderTeam":
      return imgDeviderTeam;
    case "imgEventLhc":
      return imgEventLhc;
    case "imgEventHc":
      return imgEventHc;
    case "imgEventKs":
      return imgEventKs;
    case "imgMember":
      return imgMember;
    case "imgProject":
      return imgProject;
    case "imgTrustedBy":
      return imgTrustedBy;
    case "imgContactUs":
      return imgContactUs;
    case "imgFooter":
      return imgFooter;
    default:
      return;
  }
};
