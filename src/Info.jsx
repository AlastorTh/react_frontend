import React from "react";
import meme from "./assets/clorox.gif";
const Info = () => {
  return (
    <div>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="#aa00ff purple-text text-accent-4">Курсовая по ИТ</h5>
              <p class="#aa00ff purple-text text-accent-4">
                Интерактивный список дел
              </p>
              <p class="#aa00ff purple-text text-accent-4">
                Разработчик: Касаткин А.С. 324Б-18
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="/">
                    About
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="/create">
                    Add one
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="/todos">
                    List all
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2021 MEME Made by MAI GANG</div>
        </div>
      </footer>

      <img src={meme} alt="loading..." />
    </div>
  );
};

export default Info;

// const TodoCard = (props) => {
//   const { todo } = props;
//   const { id, title, completed } = todo;
//   let history = useHistory();
//   return (
//     <div
//       style={{
//         backgroundColor: "grey",
//         margin: "10px",
//         padding: "15px",
//         width: "150px",
//       }}
//       onClick={() => history.push(`/todo/${id}`)}
//     >
//       <h4>{title}</h4>
//       <h6>{`Completed: ${completed}`}</h6>
//     </div>
//   );
// };
