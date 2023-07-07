import "./Modals.css";

const Modals = ({ open, onClose, modalArticle }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay_styles" />
      <div className="modal_styles">
        <button onClick={onClose}>Close Modal</button>
        {/* {article.title} */}
        {modalArticle.title}
      </div>
    </>
  );
};

export default Modals;
