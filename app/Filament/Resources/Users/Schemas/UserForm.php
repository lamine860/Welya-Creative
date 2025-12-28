<?php

namespace App\Filament\Resources\Users\Schemas;

use App\Enum\Role;
use Filament\Forms\Components\Select;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;

class UserForm
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
                                TextInput::make('email')
                                    ->label('E-mail')
                                    ->required()
                                    ->minLength(2)
                                    ->maxLength(255),

                            ])->columnSpan(8),
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
                                Select::make('role')
                                    ->options([
                                        Role::ADMIN->value => 'Administrateur',
                                        Role::EDITOR->value => 'Editeur',
                                        Role::USER->value => 'Simple Utilisateur',
                                    ])->native(false)
                            ])->columnSpan(4)
                    ])->columnSpan(4),
            ]);
    }
}
