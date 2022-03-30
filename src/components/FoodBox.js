import { Card, Col, Button, Row } from 'antd';

export function FoodBox(props) {

    const handleRemoveItem = (e) => {
        e.preventDefault();

        props.deleteFood(props.food.name);
    };

    return (
        <Row gutter={[16, 16]} >
            <Col span={12}>
                <Card
                    title={props.food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >
                    <img src={props.food.image} height={60} alt="food" />
                    <p>Calories: {props.food.calories}</p>
                    <p>Servings: {props.food.servings}</p>
                    <p>
                        <b>Total Calories: {`${props.food.calories * props.food.servings}`} </b> kcal
                    </p>
                    <Button type="primary" onClick={handleRemoveItem}> Delete </Button>
                </Card>
            </Col>
        </Row>
    );
};

export default FoodBox;