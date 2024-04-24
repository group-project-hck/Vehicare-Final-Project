export default function CartList({ modal, setModal }: { modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            {modal && (
                <p>MASUK</p>
            )}
        </>
    )
}