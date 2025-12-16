<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Flex;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Information principales')
                    ->schema([
                        Grid::make()
                            ->schema(
                                [
                                    TextInput::make('title')
                                        ->label('Titre')
                                        ->required()
                                        ->minLength(2)
                                        ->maxLength(255),
                                    TextInput::make('customer')
                                        ->label('Client')
                                        ->required()
                                        ->minLength(2)
                                        ->maxLength(255),
                                    TextInput::make('industry')
                                        ->label('Industrie')
                                        ->required()
                                        ->minLength(2)
                                        ->maxLength(255)
                                ]
                            ),
                        Textarea::make('description')
                            ->label('Description')
                            ->required(),
                        Textarea::make('challenge')
                            ->label('Défi')
                            ->required(),
                        Textarea::make('mission')
                            ->label('Mission')
                            ->required(),
                        Textarea::make('solutions')
                            ->label('Solutions')
                            ->required(),
                        Textarea::make('result')
                            ->label('Résultats')
                            ->required(),

                    ])->columnSpan(8),
                Section::make('Données supplémentaires')
                    ->schema([
                        FileUpload::make('cover_image')
                            ->label('Image de couverture')
                            ->required()
                            ->image(),
                        DatePicker::make('year')
                            ->label('Année')
                            ->format('Y')
                            ->required()
                            ->native(false),
                        Checkbox::make('is_featured')
                            ->label('Mise en avant'),
                        Radio::make('status')
                            ->options([
                                'draft' => 'Brouillon',
                                'published' => 'Publier'
                            ])

                    ])->columnSpan(4)

            ])->columns(12);
    }
}
