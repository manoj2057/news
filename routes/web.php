<?php

use Illuminate\Support\Facades\Route;
use App\Http\HomeController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', function () {
    return view('home');
});
Route::get('/home/category', function () {
    return view('category');
});
Route::get('/home/contact-us', function () {
    return view('contact-us');
});
Route::get('/home/search', function () {
    return view('search');
});
Route::get('/home/sports', function () {
    return view('sports');
});
Route::get('/home/sports-copy', function () {
    return view('sports');
});
Route::get('/home/team', function () {
    return view('team');
});
