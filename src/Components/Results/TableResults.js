import Currency from "./Currency";
import classes from './TableResults.module.css';

function TableResults(props) {
    if(props.results.length===0){
        return <p align="center">No results found!</p>
    }
    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map((result)=>{
                    return (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td><Currency value={result.savingsEndOfYear} /></td>
                        <td><Currency value={result.yearlyInterest} /></td>
                        <td><Currency value={result.totalInterest} /></td>
                        <td><Currency value={result.yearlyContribution} /></td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TableResults;

