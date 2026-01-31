<?php

namespace App\Http\Requests;

use App\Models\Video;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreVideoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return request()->user()->can("create", Video::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'link' => ['required','url',"regex:/https?:\/\/(?:(?:www\.)?youtube\.com\/watch\?[^#\s]*v=|youtu\.be\/)([A-Za-z0-9_-]{11})(?:[&?][^#\s]*)*/i
"],
        ];
    }
}
