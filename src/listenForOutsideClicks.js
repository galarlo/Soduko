export default function listenForOutsideClicks(listeningForOutsideClick, setListening, ref, setIsOpen) {
    return () => {
        if (listeningForOutsideClick) return;
        if (!ref.current) return;
        setListening(true);
        document.addEventListener(`click`, (evt) => {
            if (ref.current.contains(evt.target)) return;
            setIsOpen(false);
        });
    }
}
