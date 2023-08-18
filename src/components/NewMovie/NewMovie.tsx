import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ( {onAdd}) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');

  const resetForm = () => {
    setCount(count + 1);
    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
  };

  const isField = (
       title.trim() &&
       imgUrl.trim() &&
       imdbUrl.trim() &&
       imdbId.trim()
  );


  const allField = (event: React.FormEvent) => {
    event.preventDefault();

    if(isField) {
        onAdd({
          title,
          description,
          imgUrl,
          imdbUrl,
          imdbId,
        })
      }


    resetForm()
  }



  return (
    <form className="NewMovie" key={count} onSubmit={allField}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={(newTitle) => {setTitle(newTitle)}}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={(newDescription) => {setDescription(newDescription)}}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={(newImgUrl) => {setImgUrl(newImgUrl)}}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={(newImdbUrl) => {setImdbUrl(newImdbUrl)}}
        required
      />

      <TextField
        name="i"
        label="Imdb ID"
        value={imdbId}
        onChange={(newImdbId) => {setImdbId(newImdbId)}}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled = {!isField}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
