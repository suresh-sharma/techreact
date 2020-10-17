import React from 'react'
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}

function formatDate(date) {
  return date.toLocaleDateString();
}


function UserInfo (props){
   return <div className = "UserInfo" > 
    <Avatar author={props.User}></Avatar> 
    <div className = "UserInfo-name" > {
      props.User.name
    } </div>
    </div >
}


export class Comment extends React.Component{
   
     render () {
     return(
      <div className="Comment">
       <UserInfo User={this.props.author}></UserInfo>        
        <div className="Comment-text">
          {this.props.text}
        </div>
        <div className="Comment-date">
          {formatDate(this.props.date)}
        </div>
      </div>
    );
  }
  }