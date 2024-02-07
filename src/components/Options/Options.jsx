import css from './Options.module.css';

export const Options = ({ onUpdate, onReset, isHidden }) => {
  return (
    <div className={css.container}>
      <button onClick={() => onUpdate('good')} className={css.btn}>
        Good
      </button>
      <button onClick={() => onUpdate('neutral')} className={css.btn}>
        Neutral
      </button>
      <button onClick={() => onUpdate('bad')} className={css.btn}>
        Bad
      </button>
      {isHidden !== 0 && (
        <button onClick={onReset} className={css.btnReset}>
          Reset
        </button>
      )}
    </div>
  );
};
