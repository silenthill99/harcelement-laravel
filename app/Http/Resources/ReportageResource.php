<?php

namespace App\Http\Resources;

use App\Models\Reportage;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReportageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "url" => $this->url,
            'can_create' => $request->user()?->can('create', Reportage::class),
            'can_update' => $request->user()?->can('update', $this->resource),
            'can_delete' => $request->user()?->can('delete', $this->resource),
        ];
    }
}
