/**
 * Created by jarosanger on 8/15/16.
 */
import { createConstants } from './services/utils';

const constants = createConstants(
    'RESET_USER_AUTH',
    'LOGOUT_USER',
    'SET_USER_AUTH',
    'GET_USER',
    'USER_FAIL',
    'SET_AVATAR',

    'START_LOADING',
    'END_LOADING',

    'LOGIN_USER_REQUEST',
    'LOGIN_USER_FAILURE',
    'LOGIN_USER_SUCCESS',

    'SIGNUP_USER_REQUEST',
    'SIGNUP_USER_FAILURE',
    'SIGNUP_USER_SUCCESS',
    'SIGNUP_USER_RESET',

    'FORGOT_PASSWORD_SENT',
    'FORGOT_PASSWORD_REQUEST',
    'FORGOT_PASSWORD_FAILURE',

    'RESET_PASSWORD_REQUEST',
    'RESET_PASSWORD_FAILURE',
    'RESET_PASSWORD_SUCCESS',

    'SETTINGS_FAILURE',
    'SETTINGS_GET_REQUEST',
    'SETTINGS_GET_SUCCESS',
    'SETTINGS_SAVE_REQUEST',
    'SETTINGS_SAVE_SUCCESS',

    'PROVIDERS_FAILURE',
    'PROVIDERS_GET_REQUEST',
    'PROVIDERS_GET_SUCCESS',
    'PROVIDERS_CONNECT_REQUEST',
    'PROVIDERS_CONNECT_SUCCESS',
    'CONNECTS_ADD_REQUEST',
    'CONNECTS_ADD_SUCCESS',
    'CONNECTS_GET_REQUEST',
    'CONNECTS_GET_SUCCESS',
    'CONNECTS_SAVE_REQUEST',
    'CONNECTS_SAVE_SUCCESS',
    'CONNECTS_DELETE_REQUEST',
    'CONNECTS_DELETE_SUCCESS',

    'VIDEOS_FAILURE',
    'GET_VIDEOS_REQUEST',
    'ALL_VIDEOS',
    'VIDEOS_REMOVE',

    'PROJECT_FAILURE',
    'PROJECT_RESET',
    'PROJECT_SAVE_REQUEST',
    'PROJECT_SAVE_SUCCESS',
    'PROJECT_GET_REQUEST',
    'PROJECT_GET_SUCCESS',
    'PROJECT_DELETE_REQUEST',
    'PROJECT_DELETE_SUCCESS',
    'PROJECT_SET_SUCCESS',
    'PROJECT_SET_THUMBNAIL',

    'ARTWORK_FAILURE',
    'ARTWORK_RESET',
    'ARTWORK_RESET_SETTING',
    'ARTWORK_SAVE_REQUEST',
    'ARTWORK_SAVE_SUCCESS',
    'ARTWORK_DELETE_REQUEST',
    'ARTWORK_DELETE_SUCCESS',
    'ARTWORK_GET_REQUEST',
    'ARTWORK_GET_SUCCESS',
    'ARTWORK_SET_SUCCESS',
    'ARTWORK_TEMPLATE_GET_REQUEST',
    'ARTWORK_TEMPLATE_GET_SUCCESS',

    'TRACKS_FAILURE',
    'TRACKS_RESET',
    'TRACKS_GET_REQUEST',
    'TRACKS_GET_SUCCESS',
    'TRACKS_SAVE_REQUEST',
    'TRACKS_SAVE_SUCCESS',
    'TRACKS_ADD_REQUEST',
    'TRACKS_ADD_SUCCESS',
    'TRACKS_DELETE_REQUEST',
    'TRACKS_DELETE_SUCCESS',
    'TRACKS_UPLOADING_SET',

    'BUILD_FAILURE',
    'BUILD_RESET',
    'BUILD_CHECK_REQUEST',
    'BUILD_CHECK_SUCCESS',
    'BUILD_PROJECT_REQUEST',
    'BUILD_TRACK_REQUEST',
    'BUILD_TRACK_SUCCESS',
    'BUILD_GET_REQUEST',
    'BUILD_GET_SUCCESS',
    'BUILD_TRACK_REMOVE',
    'BUILD_DELETE_REQUEST',
    'BUILD_DELETE_SUCCESS',
    'BUILD_ORDER_REQUEST',
    'BUILD_ORDER_SUCCESS',

    'NOTIFICATIONS_FAILURE',
    'NOTIFICATIONS_GET_REQUEST',
    'NOTIFICATIONS_GET_SUCCESS',
    'NOTIFICATIONS_SAVE_REQUEST',
    'NOTIFICATIONS_SAVE_SUCCESS',
    'NOTIFICATIONS_DELETE_REQUEST',
    'NOTIFICATIONS_DELETE_SUCCESS',
);

const configs = {
    BASE_API_URL: 'http://localhost:3000/api/',

};

module.exports = Object.assign({}, constants, configs);
