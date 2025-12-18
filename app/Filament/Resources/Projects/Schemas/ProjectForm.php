<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
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
                        RichEditor::make('challenge')
                            ->label('Défi')
                            ->required(),
                        RichEditor::make('mission')
                            ->label('Mission')
                            ->required(),
                        RichEditor::make('solutions')
                            ->label('Solutions')
                            ->required(),
                        RichEditor::make('results')
                            ->label('Résultat')
                            ->required(),


                    ])->columnSpan(8),
                Grid::make()
                    ->schema([
                        Section::make('Données supplémentaires')
                            ->schema([
                                FileUpload::make('cover_image')
                                    ->label('Image de couverture')
                                    ->required()
                                    ->image()
                                    ->imageResizeMode('cover')
                                    ->imageCropAspectRatio('16:9')
                                    ->imageResizeTargetWidth('1920')
                                    ->imageResizeTargetHeight('1080'),
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
                                    ]),

                            ])->columnSpan(4),
                        Section::make('Gallerie d\'image')
                            ->schema([
                                SpatieMediaLibraryFileUpload::make('gallery')
                                    ->label('Gallerie')
                                    ->collection('gallery')
                                    ->image()
                                    ->multiple()
                                    ->reorderable()
                                    ->imageResizeMode('cover')
                                    ->imageCropAspectRatio('16:9')
                                    ->imageResizeTargetWidth('1920')
                                    ->imageResizeTargetHeight('1080')
                                    ->columnSpanFull(),

                            ])->columnSpan(4)
                    ])->columnSpan(4)


            ])->columns(12);
    }
}
