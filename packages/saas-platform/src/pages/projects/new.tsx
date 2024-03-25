import { Divider, Select } from 'antd';

import CanyonBillingRadio from '../../components/BillingRadio.tsx';

const NewPages = () => {
  const description = 'asfas';
  const lists = ['Github', 'Gitlab', 'Bitbucket', 'Others'];
  const [val, setVal] = useState(0);
  return (
    <div className={'flex'}>
      <Steps
        className={'w-[200px]'}
        direction="vertical"
        current={1}
        items={[
          {
            title: 'Finished',
            description,
          },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
      <Divider type={'vertical'} className={'h-[100px]'} />
      <div className={'grid gap-2'}>
        <h2>Create Resource From Source Code</h2>

        <div>
          <div className={'mb-2'}>Service Provider</div>
          <div className={'w-[140px] gap-2 grid'}>
            {lists.map((item, index) => {
              return (
                <CanyonBillingRadio
                  isAciti={val === index}
                  onSelect={() => {
                    setVal(index);
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className={'flex flex-col'}>
          <div className={'mb-2'}>Repository</div>

          <Select className={'w-[200px]'} />
        </div>
      </div>
    </div>
  );
};

export default NewPages;
