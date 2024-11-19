import { Controller, useForm } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { apiSearcher } from '../../../api/searcher/apiSearcher';
import { useEffect } from 'react';
import { useContextState } from '../../../utils/hooks/useContextState';
import { toast } from 'react-toastify';
import { Input } from 'antd';

type FormValues = {
  movie: string;
};

export const Searcher = () => {
  const { page, setStateMovies, setPage, isLoaded, setEmptyMovies } = useContextState();
  const { getMovies } = apiSearcher();
  const { control, getValues, setValue } = useForm<FormValues>({
    defaultValues: {
      movie: '',
    },
  });

  const fetchMovies = async (value: string, page: number) => {
    try {
      const movies = await getMovies({ query: value, page: page });
      movies.results.length > 0 ? setEmptyMovies(false) : setEmptyMovies(true);
      setStateMovies(movies.results);
    } catch (e) {
      toast.error('Проверте соединениее с интернетом');
    }
  };

  const debounced = useDebouncedCallback((value) => fetchMovies(value, page), 1000);

  const handleChange = (value: string) => {
    setValue('movie', value);
    if (value.length === 0) {
      setPage(1);
    }
    debounced(value);
  };

  useEffect(() => {
    const currentValue = getValues('movie');
    if (currentValue) {
      fetchMovies(currentValue, page);
    }
  }, [page]);

  return (
    <form>
      <Controller
        name="movie"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            onChange={(e) => handleChange(e.target.value)}
            disabled={isLoaded}
            data-input="input"
            className="h-[40px] mb-[34px]"
            placeholder="Введите текст для поиска"
            allowClear
          />
        )}
      />
    </form>
  );
};
