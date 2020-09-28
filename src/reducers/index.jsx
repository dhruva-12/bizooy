import { combineReducers } from 'redux';
import TodoApp from './todos.reducer';
import EmailApp from './email.reducer';
import ChatApp from './chat.reducer';
import EcommerceApp from './ecommerce.reducer';
import WishlistApp from './wishlist.reducer';
import Filters from './filters.reducer';
import Customizer from './customizer.reducer';
import authUser from './authUser.reducer';
import dashboardReducer from './dashboard.reducer';
import review from './review.reducer';
import customer from './customer.reducer';
import mailchimp from './mailchimp.reducer';
import settings from './settings.reducer';
import unsubscribe from './unsubscribe.reducer';
import completed from './completed.reducer';
const reducers = combineReducers({
    TodoApp,
    EmailApp,
    ChatApp,
    data: EcommerceApp,
    WishlistApp,
    filters: Filters,
    Customizer,
    authUser,
    dashboardReducer,
    review,
    customer,
    mailchimp,
    settings,
    unsubscribe,
    completed
   
    
});

export default reducers;
