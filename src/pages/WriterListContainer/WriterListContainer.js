import React, { useState } from 'react';
import { Space, Typography } from 'antd';
import { useQuery } from '@apollo/client';
import { WRITER_NAMES } from '../../appolo/typeDefs';
import WriterList from '../../components/organisms/WriterList';
import WriterOption from '../../components/organisms/WriterOptions';
import { buildGrapQlVariables } from '../../utils/convertUtils/queryUtils';

const { Title } = Typography;

const WriterListContainer = () => {
  const [options, setOptions] = useState();
  const writerOpHandler = (options) => {
    setOptions(options);
  };

  return (
    <>
      {!options ? (
        <>
          <Title level={3}>Writer Options:</Title>
          <WriterOption onSubmit={(options) => writerOpHandler(options)} />
        </>
      ) : null}

      <Title level={3}>Writer List:</Title>
      <>{!options ? <p>Please select and submit options</p> : <Writers options={options} />}</>
    </>
  );
};

const Writers = (props) => {
  const { options } = props;
  const queryVariables = buildGrapQlVariables(options);
  console.log(queryVariables);
  const { loading, error, data } = useQuery(
    WRITER_NAMES,
    { variables: queryVariables },
    { fetchPolicy: 'cache-and-network' },
  );

  return (
    <>
      <WriterList loading={loading} error={error} data={data} />
    </>
  );
};

export default WriterListContainer;
