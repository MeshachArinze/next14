import NoteCard from "./NoteCard";
import PropTypes from "prop-types"

function NoteList({ notesData }: any) {
  function sortByDate(a: any, b: any) {
    const dateA = a.createDate;
    const dateB = b.createDate;
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  }

  return (
    <div className="row tab-content bg-transparent note-has-grid">
      {notesData.sort(sortByDate).map((note: any) => {
        return <NoteCard note={note} key={note.id} />;
      })}
    </div>
  );
}

NoteList.propTypes = {
  notesData: PropTypes.array,
};

export default NoteList;
