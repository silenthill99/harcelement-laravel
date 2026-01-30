<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VideoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'title' => $this->resource->title,
            'link' => $this->resource->link,
            'can_edit' => request()->user()?->can('update', $this->resource),
            "can_delete" => request()->user()?->can('delete', $this->resource),
        ];
    }
}
