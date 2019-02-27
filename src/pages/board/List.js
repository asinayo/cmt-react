import React from 'react';
import { NavLink } from 'react-router-dom';

class BoardListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {boards : []};
        this.headers = ['id', 'title', 'contents', 'author', 'date', 'delete'];

        this.onClickDelete = this.onClickDelete.bind(this);
    }

    componentDidMount() {
        this.fetchBoardList();
    }

    fetchBoardList() {
        fetch('http://localhost:8080/board/list')
        .then(response => {
            return response.json();
        }).then(result => {
            console.log(result);
            this.setState({
                boards:result
            });
        });
    }

    onClickDelete = (id) => {
        const __this = this;
            fetch('http://localhost:8080/board/delete/'+id, {
              method: 'delete',
          }).then(function (response) {
              return response;
          }).then(function (data) {
            __this.fetchBoardList();
          });
    }

    render() {

      const  __this = this;
      return (
        <div>
          <table>
				<thead>
					<tr>
					{
						this.headers.map(function(h, idx) {
							return (
								<th key={idx}>{h}</th>
							)
						})
					}
					</tr>
				</thead>
				<tbody>
					{
						this.state.boards.map(function(board) {             
						return (
								<tr key={board.id}>
								  <td><NavLink exact to={"/board/detail/" + board.id} >{board.id}</NavLink></td>
								  <td>{board.title}</td>
								  <td>{board.contents}</td>
                                  <td>{board.author}</td>
								  <td>{board.createDate}</td>
                                  <td><button type="button" onClick={() => __this.onClickDelete(board.id)}>delete</button></td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
        </div>
      );
    }
  }

export default BoardListPage;