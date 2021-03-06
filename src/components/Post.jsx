import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
        <Avatar source="https://github.com/italocavalcanti3.png" />
          <div className={styles.authorInfo}>
            <strong>Italo Cavalcanti</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time  title="11 de maio às 08:13" dateTime='2022-05-11 08:13:30' >Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a> &nbsp;
          <a href="#">#nlw</a> &nbsp;
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  );
}