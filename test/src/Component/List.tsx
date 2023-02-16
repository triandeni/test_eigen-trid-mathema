import React, { Fragment, useEffect, useState } from 'react';
import { Data } from '../models/Data';
import { Service } from '../service/Service';
import { Link } from 'react-router-dom';
import { Card, Space } from 'antd';
import Button from 'antd/es/button';

interface IState {
  loading: boolean;
  users: Data[];
  errorMsg: string;
}

const List: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as Data[],
    errorMsg: '',
  });
  useEffect(() => {
    setState({ ...state, loading: true });
    Service.getAllData()
      .then((res) =>
        setState({
          ...state,
          loading: false,
          users: res.data.articles,
        })
      )
      .catch((err) =>
        setState({
          ...state,
          loading: false,
          errorMsg: err.message,
        })
      );
  }, []);

  const { loading, users, errorMsg } = state;

  return (
    <Fragment>
      <div className="list">
        <h1>Data From API</h1>
        {errorMsg && <p>{errorMsg}</p>}
        {loading && <h1>loading...</h1>}
        {users.map((user, key) => (
          <Space key={key}>
            <Card
              style={{
                width: 1000,
                height: 500,
                marginBottom: 10,
                backgroundColor: '#87e8de',
              }}
            >
              <div style={{ height: 100 }}>
                <img
                  style={{ width: 700, height: 280, backgroundSize: 'cover' }}
                  src={user.urlToImage}
                  alt=""
                />
                <p>
                  {user.publishedAt},
                  <span style={{ fontWeight: 'bolder', marginLeft: 8 }}>
                    {user.author}
                  </span>
                </p>
                <h1 style={{ fontSize: 20, fontWeight: 'bold' }}>{user.title}</h1>
              </div>
              <Button
                style={{
                  justifyContent: 'center',
                  width: 100,
                  left: 400,
                  top: 300,
                  fontWeight: 'bold',
                }}
              >
                <Link to={user.url} target="_blank">
                  Read More
                </Link>
              </Button>
            </Card>
          </Space>
        ))}
      </div>
    </Fragment>
  );
};

export default List;
