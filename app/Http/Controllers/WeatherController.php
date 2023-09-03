<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherController extends Controller
{
    public function getWeather($lat, $lon)
    {
        $apiKey = 'YOUR_API_KEY';
        $url = "https://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&appid=$apiKey";
        
        $response = Http::get($url);
    
        return $response->json();
    }
}
