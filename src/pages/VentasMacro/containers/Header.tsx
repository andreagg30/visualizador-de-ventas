import HeaderContainer from '@/components/HeaderCard';
import RangeDateSelect from '@/components/RangeDateSelect';
import { Controller, useFormContext } from 'react-hook-form';

export default function Header() {
  const { control, watch } = useFormContext();
console.log(watch(), '-------------------------');

  return (
    <HeaderContainer>
      <div className="flex gap-3">
        <Controller
          control={control}
          name="date-range"
          render={({ field: { onChange, value } }) => (
            <RangeDateSelect onChange={onChange} value={value} />
          )}
        />
      </div>
    </HeaderContainer>
  );
}
