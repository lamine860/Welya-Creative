<?php

namespace App\Filament\Resources\Testimonies\Schemas;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class TestimonyForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make(12)
                    ->schema([
                        Section::make('Informations Principale')
                            ->schema([
                                TextInput::make('name')
                                    ->label('Nom')
                                    ->required()
                                    ->minLength(2)
                                    ->maxLength(255),
                                TextInput::make('company')
                                    ->label('Entreprise')
                                    ->required()
                                    ->minLength(2)
                                    ->maxLength(255),
                                TextInput::make('position')
                                    ->label('Poste')
                                    ->required()
                                    ->minLength(2)
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                                Textarea::make('message')
                                    ->label('Message')
                                    ->required()
                                    ->columnSpanFull(),
                            ])->columnSpan(8)
                            ->columns(2),
                        Section::make('Données supplémentaires')
                            ->schema([
                                SpatieMediaLibraryFileUpload::make('avatar')
                                    ->label('Avatar')
                                    ->required()
                                    ->image()
                                    ->imageResizeMode('cover')
                                    ->imageCropAspectRatio('1:1')
                                    ->imageResizeTargetWidth('300')
                                    ->imageResizeTargetHeight('300'),
                                Checkbox::make('is_published')
                                    ->label('Publié'),
                            ])->columnSpan(4)
                    ])->columnSpan(4),
            ]);
    }
}
