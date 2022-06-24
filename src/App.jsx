import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Italo Cavalcanti"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, error. Neque at non aspernatur nesciunt est soluta id? Nesciunt, velit fugiat pariatur vel earum expedita rerum suscipit inventore quod minus."
          />
          <Post
            author="Italo Cavalcanti"
            content="Novo post muito legal."
          />
        </main>
      </div>

    </div>
  )
}

