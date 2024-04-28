import styles from './FirstView.module.scss';

export const FirstView = () => {
  return (
    <header className={styles['first-view']}>
      <h1>Paginas y Aromas</h1>
      <span>El lugar donde el aroma del café se entrelaza con las historias impresas.</span>
    </header>
  )
}
