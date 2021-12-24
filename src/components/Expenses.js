import "./Expenses.css";
import Card from "./Card"
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />

      {/*
      {props.items.map((item) => {
        return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
    })}
      */}
    </Card>
  );
};

export default Expenses;
