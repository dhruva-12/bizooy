import React, { useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { useSelector } from 'react-redux';

//un-comment this auth by using firebase only
// import app from './data/base';
// import {useState} from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux**
import { Provider } from 'react-redux';
import store from './store/index';
import App from "./components/app";

//settings

import Information from './components/settings/Information';
import Unsubscribe from './components/Unsubscribe/Unsubscribe';
import SocialProfiles from './components/SocialProfiles/SocialProfiles';

//review
import Request from './components/review/Request';
import Opened from './components/opened/Opened';
import CompletedReview from './components/completed/CompletedReview';

  

import EmailSms from './components/emailsms/EmailSms';


//customer route
import CustomerForm from './components/customers/CustomerForm';
import CustomerBulk from './components/customers/CustomerBulk';
import CustomerAll from './components/customers/CustomerAll';
// Import custom Components 


import Mailchimp from './components/mailchimp/Mailchimp';

import Unopened from './components/unopened/Unopened';

import Dashboard2 from './components/dashboard/Dashboard2';
import Default from './components/dashboard/defaultCompo/default';
import Ecommerce from './components/dashboard/ecommerce';
import University from './components/dashboard/university';
import Crypto from './components/dashboard/crypto/crypto-component';
import ServerComponent from './components/dashboard/server/server-component';
import Project from './components/dashboard/project/project';

// widgets
import General from './components/widgets/general';
import Chart from './components/widgets/chart';

//Ui-elements
import Avatar from './components/ui-elements/avatar';
import UIBreadCrumb from './components/ui-elements/uibreadcrumb';
import Grid from './components/ui-elements/grid';
import HelperClass from './components/ui-elements/helperclass';
import List from './components/ui-elements/lists/list';
import Ribbon from './components/ui-elements/ribbon';
import Shadow from './components/ui-elements/shadow';
import Spinner from './components/ui-elements/spinner';
import Statecolor from './components/ui-elements/statecolor';
import Steps from './components/ui-elements/steps';
import TagsandPills from './components/ui-elements/tagsandpills';
import Typography from './components/ui-elements/typography';

//Base
import Accordion from './components/base/accordionComponent/accordion';
import AlertComponent from './components/base/alertComponent/alert';
import CarouselComponent from './components/base/Carousels/carouselComponent';
import CollapseComponent from './components/base/collapseComponent';
import DatepickerComponent from './components/base/datepickerComponent';
import DropdownComponent from './components/base/dropdownComponent';
import ModalComponent from './components/base/modalComponent';
import Pagination from './components/base/pagination';
import PopoverComponent from './components/base/popover/popoverComponent';
import ProgressBar from './components/base/progressBar';
import RatingComponent from './components/base/ratingComponent';
import TabsSet from './components/base/tabs-set';
import TooltipsComponent from './components/base/tooltipsComponent';
import TimePickerWrapper from './components/base/timepickerComponent/timepicker';
import TypeaheadComp from './components/base/typeaheadComponent/typeahead';

// Advance
import DragNDropComp from './components/advance/drag-n-drop/dragNDropComp';
import DropzoneComponent from './components/advance/dropzone';
import ImageCropper from './components/advance/imageCropper';
import Toastr from './components/advance/toastr';
import Carousel from './components/advance/carousel';
import RangeSlider from './components/advance/rangeSlider';
import Scrollable from './components/advance/scrollable';
import StickyNotes from './components/advance/stickyNotes';
import SweetAlert from './components/advance/sweetAlert';
import TourComponent from './components/advance/tourComponent';
import UploadImage from './components/advance/uploadImage';
import FlagIcons from './components/icons/flagIcons';
import FontAwsomeIcon from './components/icons/fontAwsomeIcon';
import IcoIcons from './components/icons/icoIcons';
import ThemifyIcons from './components/icons/themifyIcons';
import FeatherIcons from './components/icons/featherIcons';
import WeatherIcons from './components/icons/weatherIcons';
import DefaultBtn from './components/buttons/default-btn';
import FlatBtn from './components/buttons/flatBtn';
import EdgeBtn from './components/buttons/edgeBtn';
import RaisedBtn from './components/buttons/raisedBtn';
import GroupBtn from './components/buttons/groupBtn';
import ImageGallery from './components/gallery/imageGallery';
import ImageHover from './components/gallery/imageHover';
import ImageWithDesc from './components/gallery/imageWithDesc';
import MesonryGallery from './components/gallery/mesonryGallery';
import FormValidation from './components/forms/form-control/form-validation';
import BaseInput from './components/forms/form-control/baseInput';
import RadioCheckbox from './components/forms/form-control/radio-checkbox';
import InputGroupComp from './components/forms/form-control/inputGroup';
import MegaOptions from './components/forms/form-control/megaOptions';
import FormDefault from './components/forms/formDefault';
import FormWizard from './components/forms/wizard/form-wizard';
import BasicTable from './components/tables/bootstrap/basicTable';
import DataTableComponent from './components/tables/dataTableComponent';
import BasicCards from './components/cards/basicCards';
import CreativeCards from './components/cards/creativeCards';
import TabCard from './components/cards/tabCard';
import DraggingCards from './components/cards/draggingCards';
import Timeline2 from './components/timelines/timeline2';
import Timeline from './components/timelines/timeline';
import GoogleChart from './components/charts/googleChart';
import ChartJs from './components/charts/chartJs';
import ChartistComponent from './components/charts/chartistComponent';
import GoogleMap from './components/map/googleMap';
import LeafletMapComp from './components/map/leafletMap';
import Editor1 from './components/editor/editor1';
import UserProfile from './components/users/userProfile';
import UserEdit from './components/users/userEdit';
import UserCards from './components/users/user-cards';
import Calender1 from './components/calender/calender1';
import Calender2 from './components/calender/calender2';
import BlogDetail from './components/blog/blogDetail';
import BlogSingle from './components/blog/blogSingle';
import BlogPost from './components/blog/blogPost';
import SocialApp from './components/social-app/socialApp';
import CardView from './components/jobSearch/cardView';
import JobList from './components/jobSearch/job-list';
import JobDetail from './components/jobSearch/job-detail';
import JobApply from './components/jobSearch/job-apply';
import LearningList from './components/learning/learning-list';
import LearningDeatil from './components/learning/learning-deatil';
import FaqComponent from './components/faq/faqComponent';
import KnowledgebaseComponent from './components/knowledgebase/knowledgebaseComponent';
import SupportTicket from './components/support-ticket/supportTicket';
import Login from './pages/login';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import LoginWithBgImg from './pages/loginWithBgImg';
import LoginWithVideo from './pages/loginWithVideo';
import Signup from './pages/signup';
import SignupWithImg from './pages/signupWithImg';
import SignupWithVideo from './pages/signupWithVideo';
import UnlockUser from './pages/unlockUser';
import ForgetPwd from './pages/forgetPwd';
import ResetPwd from './pages/resetPwd';
import ResetPwdWithEmail from './pages/ResetPwdWithEmail';
import ComingSoon from './pages/comingsoon';
import ComingSoonImg from './pages/comingsoonImg';
import ComingSoonVideo from './pages/comingsoonVideo';
import Maintenance from './pages/maintenance';
import Error400 from './pages/errors/error400';
import Error401 from './pages/errors/error401';
import Error403 from './pages/errors/error403';
import Error404 from './pages/errors/error404';
import Error500 from './pages/errors/error500';
import Error503 from './pages/errors/error503';

// Import Applications Components
import Todo from './components/applications/todo-app/todo';
import EmailDefault from './components/applications/email-app/emailDefault';
import Chat from './components/applications/chat-app/chat';
import EcommerceApp from './components/applications/ecommerce-app/product';
import AddToCart from './components/applications/ecommerce-app/add-to-cart';
import WishlistComponent from './components/applications/ecommerce-app/wishlist';
import ProductDetail from './components/applications/ecommerce-app/product-detail/product-detail';
import Invoice from './components/applications/ecommerce-app/invoice';
import Checkout from './components/applications/ecommerce-app/checkout';
import todoFirebase from './components/applications/todo-firebase-app/todo-firebase';
import Signin from './auth/signin';
import ContactApp from './components/applications/contact-app/contactApp';
import NewUser from './components/applications/contact-app/new-user';
import EditUser from './components/applications/contact-app/edit-user';
import ProductList from './components/applications/ecommerce-app/product-list';
import Payment from './components/applications/ecommerce-app/payment';
import History from './components/applications/ecommerce-app/history';

// search page
import Searchpage from './components/search/searchpage';

// sample page
import Samplepage from './components/sample/samplepage';

// Pricing
import Pricing from './components/price/pricing';
import StylingTable from './components/tables/bootstrap/stylingTable';
import BorderTable from './components/tables/bootstrap/borderTable';
import SizingTable from './components/tables/bootstrap/sizingTable';
import MesonryDesc from './components/gallery/mesonryDesc';


//config data
import configDB from './data/customizer/config'

//firebase Auth only then un-comment this current User code
function Root() {
    const abortController = new AbortController();
    // const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        const layout = localStorage.getItem('layout_version') || configDB.data.color.layout_version
        // app.auth().onAuthStateChanged(setCurrentUser);
        
        document.body.classList.add(layout);

        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;

        return function cleanup() {
            abortController.abort();
        }

    }, [abortController]);

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                    <ScrollContext>
                        <Switch>
                            <Route path={`${process.env.PUBLIC_URL}/login`} component={Signin} />
                            <PublicRoute restricted={true} path={`${process.env.PUBLIC_URL}/pages/login`} component={Login} />
                            <PrivateRoute path={`${process.env.PUBLIC_URL}/pages/loginWithBgImg`} component={LoginWithBgImg} />
                            <PrivateRoute path={`${process.env.PUBLIC_URL}/pages/loginWithVideo`} component={LoginWithVideo} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/signup`} component={Signup} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithImg`} component={SignupWithImg} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithVideo`} component={SignupWithVideo} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/unlockUser`} component={UnlockUser} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/forgetPwd`} component={ForgetPwd} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/resetPwd`} component={ResetPwd} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/ResetPwdWithEmail`} component={ResetPwdWithEmail} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoon`} component={ComingSoon} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonImg`} component={ComingSoonImg} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonVideo`} component={ComingSoonVideo} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error400`} component={Error400} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error401`} component={Error401} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error403`} component={Error403} />
                            
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error500`} component={Error500} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error503`} component={Error503} />
                            
                            
                            {/* NOTE :- If u want login with firebase only then uncomment this currentUser condition*/}
                            {/* {currentUser !== null ? */}
                            <Fragment>
                                <App>
                                <Switch>
                                    {/* dashboard menu */}
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                                        return (<Redirect to={`${process.env.PUBLIC_URL}/pages/login`} />)
                                    }} />
                                    {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Default} /> */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard2} exact/>
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/dashboard/ecommerce`} component={Ecommerce} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/dashboard/university`} component={University}  />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/dashboard/crypto`} component={Crypto} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/dashboard/server`} component={ServerComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/dashboard/project`} component={Project} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/review/unopened`} component={Unopened} />
                                   

                                    {/* customer routes */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/customers/addsingle`} component={CustomerForm} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/customers/addbulk`} component={CustomerBulk} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/customers/`} component={CustomerAll} />

                                    
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/review/request`} component={Request} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/review/opened`} component={Opened} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/review/completed`} component={CompletedReview} />
                                    

                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/settings/SMS/Email`} component={EmailSms} />


                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/settings/information`} component={Information} />

                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/settings/mailchimp`} component={Mailchimp} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/unsubscribe`} component={Unsubscribe} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/settings/socialprofiles`} component={SocialProfiles} />
                                    {/* Widgets Menu */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/widgets/general`} component={General} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/widgets/chart`} component={Chart} />

                                    {/* ui-elements */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/avatar`} component={Avatar} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/uibreadcrumb`} component={UIBreadCrumb} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/grid`} component={Grid} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/helperclass`} component={HelperClass} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/list`} component={List} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/ribbon`} component={Ribbon} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/shadow`} component={Shadow} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/spinner`} component={Spinner} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/statecolor`} component={Statecolor} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/steps`} component={Steps} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/tagsandpills`} component={TagsandPills} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ui-element/typography`} component={Typography} />

                                    {/* base */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/accordion`} component={Accordion} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/alert`} component={AlertComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/carouselComponent`} component={CarouselComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/collapseComponent`} component={CollapseComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/datepickerComponent`} component={DatepickerComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/dropdownComponent`} component={DropdownComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/modalComponent`} component={ModalComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/pagination`} component={Pagination} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/popover/popoverComponent`} component={PopoverComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/progressBar`} component={ProgressBar} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/ratingComponent`} component={RatingComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/tabs-set`} component={TabsSet} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/tooltipsComponent`} component={TooltipsComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/timepicker`} component={TimePickerWrapper} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/base/typeahead`} component={TypeaheadComp} />

                                    {/* Advance */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/dragNDropComp`} component={DragNDropComp} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/dropzone`} component={DropzoneComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/imageCropper`} component={ImageCropper} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/toastr`} component={Toastr} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/carousel`} component={Carousel} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/rangeSlider`} component={RangeSlider} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/scrollable`} component={Scrollable} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/stickyNotes`} component={StickyNotes} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/sweetAlert`} component={SweetAlert} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/tourComponent`} component={TourComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/advance/uploadImage`} component={UploadImage} />

                                    {/* icons */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/icons/flagIcons`} component={FlagIcons} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/icons/fontAwsomeIcon`} component={FontAwsomeIcon} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/icons/icoIcons`} component={IcoIcons} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/icons/themifyIcons`} component={ThemifyIcons} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/icons/featherIcons`} component={FeatherIcons} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/icons/weatherIcons`} component={WeatherIcons} />

                                    {/* buttons */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/buttons/default-btn`} component={DefaultBtn} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/buttons/flatBtn`} component={FlatBtn} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/buttons/edgeBtn`} component={EdgeBtn} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/buttons/raisedBtn`} component={RaisedBtn} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/buttons/groupBtn`} component={GroupBtn} />

                                    {/* gallery */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/gallery/imageGallery`} component={ImageGallery} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/gallery/imageWithDesc`} component={ImageWithDesc} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/gallery/imageHover`} component={ImageHover} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/gallery/mesonryGallery`} component={MesonryGallery} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/gallery/mesonryDesc`} component={MesonryDesc} />

                                    {/* Forms */}
                                    <Route path={`${process.env.PUBLIC_URL}/forms/form-validation`} component={FormValidation} />
                                    <Route path={`${process.env.PUBLIC_URL}/forms/baseInput`} component={BaseInput} />
                                    <Route path={`${process.env.PUBLIC_URL}/forms/radio-checkbox`} component={RadioCheckbox} />
                                    <Route path={`${process.env.PUBLIC_URL}/forms/inputGroup`} component={InputGroupComp} />
                                    <Route path={`${process.env.PUBLIC_URL}/forms/megaOptions`} component={MegaOptions} />
                                    <Route path={`${process.env.PUBLIC_URL}/forms/formDefault`} component={FormDefault} />
                                    <Route path={`${process.env.PUBLIC_URL}/forms/FormWizard`} component={FormWizard} />

                                    {/* Tables */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/table/datatable`} component={DataTableComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/table/basic`} component={BasicTable} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/table/sizing`} component={SizingTable} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/table/border`} component={BorderTable} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/table/styling`} component={StylingTable} />

                                    {/* cards */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/cards/basicCards`} component={BasicCards} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/cards/creativeCards`} component={CreativeCards} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/cards/tabCard`} component={TabCard} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/cards/draggingCards`} component={DraggingCards} />

                                    {/* Timeline */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/timelines/timeline`} component={Timeline} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/timelines/timeline2`} component={Timeline2} />

                                    {/* Charts */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/charts/googleChart`} component={GoogleChart} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/charts/chartJs`} component={ChartJs} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/charts/chartistComponent`} component={ChartistComponent} />

                                    {/* Map */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/map/googleMap`} component={GoogleMap} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/map/leafletMap`} component={LeafletMapComp} />

                                    {/* Editor */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/editor/editor1`} component={Editor1} />

                                    {/* Users */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/users/userProfile`} component={UserProfile} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/users/userEdit`} component={UserEdit} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/users/userCards`} component={UserCards} />

                                    {/* Calender */}
                                    <Route path={`${process.env.PUBLIC_URL}/calender/calender1`} component={Calender1} />
                                    <Route path={`${process.env.PUBLIC_URL}/calender/calender2`} component={Calender2} />

                                    {/* Blog */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/blog/blogDetail`} component={BlogDetail} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/blog/blogSingle`} component={BlogSingle} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/blog/blogPost`} component={BlogPost} />

                                    {/* Social App */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/social/socialApp`} component={SocialApp} />

                                    {/* Job Search App */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/jobSearch/cardView`} component={CardView} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/jobSearch/job-list`} component={JobList} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/jobSearch/job-detail`} component={JobDetail} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/jobSearch/job-apply`} component={JobApply} />

                                    {/* Learning App */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/learning/learning-list`} component={LearningList} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/learning/learning-detail`} component={LearningDeatil} />

                                    {/* FAQ */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/faq/faqComponent`} component={FaqComponent} />

                                    {/* Knowledgebase */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/knowledgebase/knowledgebaseComponent`} component={KnowledgebaseComponent} />

                                    {/* Support Ticket */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/support-ticket/supportTicket`} component={SupportTicket} />

                                    {/* Applications */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/todo-app/todo`} component={Todo} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/email-app/emailDefault`} component={EmailDefault} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/chat-app/chat`} component={Chat} />

                                    {/* Ecommerce App */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ecommerce/product`} component={EcommerceApp} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ecommerce/cart/:id`} component={AddToCart} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ecommerce/wishlist/:id`} component={WishlistComponent} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ecommerce/product-detail/:id`} component={ProductDetail} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ecommerce/checkout`} component={Checkout} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ecommerce/invoice`} component={Invoice} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ecommerce/product-list`} component={ProductList} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ecommerce/payment`} component={Payment} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/ecommerce/history`} component={History} />

                                    {/* To-Do-Firebase */}
                                    <Route path={`${process.env.PUBLIC_URL}/todo-app/todo-firebase`} component={todoFirebase} />

                                    {/* CONTACT APP */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/contact-app/contact`} component={ContactApp} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/contact-app/new-user`} component={NewUser} />
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/contact-app/edit-user/:id`} component={EditUser} />

                                    {/* Search page */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/search/searchpage`} component={Searchpage} />

                                    {/* Sample page */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/sample/samplepage`} component={Samplepage} />

                                    {/* Pricing */}
                                    <PrivateRoute path={`${process.env.PUBLIC_URL}/price/pricing`} component={Pricing} />
                                    <Route  path="*" component={Error404}  exact/>
                                    </Switch>
                                </App>
                               
                            </Fragment>
                            {/* :
                                <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                            } */}
                            
                        </Switch>
                    </ScrollContext>
                    
                </BrowserRouter>
            </Provider>
            
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();