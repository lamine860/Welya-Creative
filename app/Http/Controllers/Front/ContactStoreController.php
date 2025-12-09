<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Requests\Front\StoreContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactStoreController extends Controller
{
    public function __invoke(StoreContactRequest $request)
    {
        Contact::create($request->validated());
        return redirect()->back()->with('status', 'Message envoye avec succès1');
    }

}
