import React from 'react';
import ReactDOM from 'react-dom';
import './Task.css';

 const emps = [
  {
    "id":1,
    "firstname": "Amit",
	"lastname":"Bisht",
    "city": "Bangalore",
    "salary": 30000
  },
  {
    "id":2,
    "firstname": "Ashok",
	"lastname":"Kulkarni",
    "city": "Delhi",
    "salary": 50000
  },
  {
    "id":3,
    "firstname": "Manoj",
	"lastname":"Pant",
    "city": "Mumbai",
    "salary": 40000
  },
  {
    "id":4,
    "firstname": "Surekha",
	"lastname":"Ray",
    "city": "Mysore",
    "salary": 30000
  },
  
  {
    "id":5,
    "firstname": "Megha",
	"lastname":"Raykar",
    "city": "Mangalore",
    "salary": 60000
  },
  {
    "id":6,
    "firstname": "Swarup",
	"lastname":"Sahani",
    "city": "Hyderabad",
    "salary": 35000
  },
  
  {
    "id":7,
    "firstname": "Rajeshwari",
	"lastname":"Pandey",
    "city": "Bellary",
    "salary": 25000
  },
  {
    "id":8,
    "firstname": "Swati",
	"lastname":"Kar",
    "city": "Bhubaneswar",
    "salary": 28000
  },
  {
    "id":9,
    "firstname": "Shekhar",
	"lastname":"Kher",
    "city": "Mumbai",
    "salary": 65000
  },
  {
    "id":10,
    "firstname": "Suman",
	"lastname":"Kapoor",
    "city": "Kolkata",
    "salary": 15000
  },
  
  {
    "id":11,
    "firstname": "Sumit",
	"lastname":"Tripathy",
    "city": "Mumbai",
    "salary": 70000
  },
  
  {
    "id":12,
    "firstname": "Rahul",
	"lastname":"Kapor",
    "city": "India",
    "salary": 24000
  },
  
  {
    "id":13,
    "firstname": "Hari",
	"lastname":"Bisht",
    "city": "Pune",
    "salary": 34000
  },
  
  {
    "id":14,
    "firstname": "Prasad",
	"lastname":"Bisht",
    "city": "Hyderabad",
    "salary": 27000
  },
  
  {
    "id":15,
    "firstname": "Ram",
	"lastname":"Arjun",
    "city": "Chennai",
    "salary": 23000
  },
  {
    "id":16,
    "firstname": "Sankar",
	"lastname":"Khan",
    "city": "Delhi",
    "salary": 11000
  },
  {
    "id":17,
    "firstname": "Rohan",
	"lastname":"Bisht",
    "city": "Pune",
    "salary": 58000
  },
  
  {
    "id":18,
    "firstname":"Ronit",
	"lastname":"Bhatta",
    "city": "Puri",
    "salary": 12000
  },
  
  {
    "id":19,
    "firstname": "Sanjana",
	"lastname":"Nanda",
    "city": "Kolkata",
    "salary": 22000
  },
  
  {
    "id":20,
    "firstname": "Steven",
	"lastname":"Allen",
    "city": "India",
    "salary": 10000
  }
];


class Task extends React.Component {

	constructor(props){
	 super(props);
	 this.rows = emps;
	 this.state = {
		EmpData : this.rows,
		sortBy: 'id',
		sortDir: null
	 }
	}



sortByColumn(key) {
  //alert(key);
  var sortDir = this.state.sortDir;
  var sortBy = key;
  if (sortBy === this.state.sortBy) {
    sortDir = this.state.sortDir === 'DESC' ? 'ASC' : 'DESC';
  } else {
    sortDir = 'DESC';
  }
  var rows = this.state.EmpData.slice();
  rows.sort((a, b) => {
    var sortVal = 0;
    if (a[sortBy] > b[sortBy]) {
      sortVal = 1;
    }
    if (a[sortBy] < b[sortBy]) {
      sortVal = -1;
    }
 
    if (sortDir === 'DESC') {
      sortVal = sortVal * -1;
    }
    return sortVal;
  });

    this.setState({
	EmpData : rows,
	sortBy: sortBy,
	sortDir: sortDir
});


}

 searchByEmp(event) {

  if (!event.target.value) {
    this.setState({
      EmpData: this.rows,
    });
  }

  var searchBy = event.target.value.toString().toLowerCase();
  var size = this.rows.length;
  var searchList = [];
  for (var index = 0; index < size; index++) {
    var v = this.rows[index]['id']+this.rows[index]['firstname']+this.rows[index]['lastname']+this.rows[index]['city']+this.rows[index]['salary'];
    if (v.toString().toLowerCase().indexOf(searchBy) !== -1) {
      searchList.push(this.rows[index]);
    }
  }
  this.setState({
    EmpData: searchList,
  });

 }

   render() {
     return (
      <div>

     <div className="Task-div">
     <b>Employee:</b>
	 <input type="text" name="search" onChange={this.searchByEmp.bind(this)}></input>
     </div>

    <div>
    <table className="Task-table"> 
	<tbody>
      <tr>
      <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'id')}> ID </th>
      <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'firstname')}> First Name </th>
      <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'lastname')}> Last Name </th>
      <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'city')}> City </th>
      <th className="Task-td-th" onClick={this.sortByColumn.bind(this, 'salary')}> Salary </th>

      </tr>
	  
	  {this.state.EmpData.map((item, index) => (
	  <tr>
      <td className="Task-td-th"> {this.state.EmpData[index]['id']}</td>
      <td className="Task-td-th"> {this.state.EmpData[index]['firstname']}</td>
      <td className="Task-td-th"> {this.state.EmpData[index]['lastname']}</td>
      <td className="Task-td-th"> {this.state.EmpData[index]['city']}</td>
      <td className="Task-td-th"> {this.state.EmpData[index]['salary']}</td>
      </tr>
	  ))}
   </tbody>
    </table>
  </div>
</div>
      )
   }
}

export default Task;