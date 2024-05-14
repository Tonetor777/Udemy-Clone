<?php 
require_once 'vendor/autoload.php';
$stripe_secret_key = "sk_test_51PEk7eP2GWvBgGw4BGV7PZqGX8VG4x9nQJdGPuQ2mkV15f1skqnB7k5eaGLhU3YiHatg2flCLVEkdUUAeIv61RMo00exJi8msW";
\Stripe\Stripe::setApiKey($stripe_secret_key);
$checkout_session = \Stripe\Checkout\Session::create([
    "mode" => "payment",
    "success_url" => "http://localhost/resource/StripApi/success.php",
    "cancel_url" => "http://localhost:5173/check",
    "line_items" => [
        [
            "quantity" => 1,
            "price_data" => [
                "currency" => "usd",
                "unit_amount" => 2000,
                "product_data" => [
                    "name" => "T-shirt"
                ]
            ]
        ]
    ]
                ]);
                http_response_code(303);
                header("Location: " . $checkout_session->url)
?>