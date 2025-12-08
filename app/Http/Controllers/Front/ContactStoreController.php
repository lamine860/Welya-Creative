<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactStoreController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|min:2|max:255',
            'email' => 'required|string|email',
            'phone_number' => 'required|string|min:12|max:255',
            'company' => 'required|string|min:2|max:255',
            'message' => 'required|string|min:12',
            'interest' => 'required|string'
        ]);

    }

}
