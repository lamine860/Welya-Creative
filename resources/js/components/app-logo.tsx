import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center">
                <AppLogoIcon className="size-5 fill-current" />
            </div>
            <span className="truncate leading-tight font-extrabold text-xl ml-1">
                Welya Creative
            </span>
        </>
    );
}
