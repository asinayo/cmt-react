import React from 'react';

class BoardRegistPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {board : {}};
    }

    handleChange = (e) => {

        this.state.board[e.target.name] = e.target.value
        this.setState({
          board : this.state.board
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
          fetch('http://localhost:8080/board/regist', {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'post',
              body: JSON.stringify(this.state.board)
          }).then(function (response) {
              return response.json();
          }).then(function (data) {
              console.log(data);
          });
      }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
            placeholder="제목"
            value={this.state.board.title}
            name="title"
            onChange={this.handleChange}
            />
            <input
            placeholder="내용"
            value={this.state.board.contents}
            name='contents'
            onChange={this.handleChange}
            />
            <input
            placeholder="작성자"
            value={this.state.board.author}
            name='author'
            onChange={this.handleChange}
            />
            <button type="submit">등록</button>
            </form>
        </div>
      );
    }
  }

export default BoardRegistPage;