import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';
import useDebounce from '../../shared-module/hooks/use-debounce.hook';

/**
 * TODO:
 * This is hardcoded strategy. The actual implementation is yet to be done.
 * Also, this is not representative of the actual data structure we will end up using
 * Need more efficient lookup strategies, this is too crude and terrible.
 * Will be researching into this topic for the best way of doing this
 */
const searchLookupArr: SearchMetadata[] = [
  {
    title: 'Demystifying JavaScript Closures',
    /**
     * TODO:
     * Look for any AWS service that can generate a list of "interesting" keywords based on content
     * Use this list for refactored strategy from above todo
     */
    keywords: ['demystifying', 'javascript', 'closures', 'theory'],
    slug: 'demystifying-javascript-closures',
  },
  {
    title: '5 Takeaways From My First Hackathon Experience',
    keywords: [
      '5',
      'takeaways',
      'from',
      'my',
      'first',
      'hackathon',
      'experience',
    ],
    slug: 'devlauncher-hackathon-experience',
  },
  {
    title: 'Introduction to RxJS',
    /**
     * TODO:
     * Look for any AWS service that can generate a list of "interesting" keywords based on content
     * Use this list for refactored strategy from above todo
     */
    keywords: ['introduction', 'rxjs', 'angular', 'theory'],
    slug: 'introduction-to-rxjs',
  },
];

export interface SearchMetadata {
  title: string;
  keywords: string[];
  slug: string;
}

const useSearch = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [looking, setLooking] = useState(true);
  const [searchHits, setSearchHits] = useState<SearchMetadata[]>([]);

  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

  const { header } = useSelector(themeSelector);
  const { search } = header;

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback((e) => {
    if (e.relatedTarget === null) {
      setShowSearchBox(false);
      setInput('');
      setFocused(false);
    }
  }, []);

  const debouncedInput = useDebounce(input, 500);

  const searchForArticles = (searchString: string) => {
    const filteredList = searchLookupArr.filter((item) => {
      return item.keywords.some((keyword) => {
        const searchWordArr = searchString.split(' ');
        return searchWordArr.every((searchWord) =>
          keyword.match(new RegExp(searchWord, 'i')),
        );
      });
    });

    setSearchHits(filteredList);
    setLooking(false);
  };

  useEffect(() => {
    if (!debouncedInput) {
      setShowSearchBox(false);
      return;
    }

    // search
    setLooking(true);
    setShowSearchBox(true);
    searchForArticles(debouncedInput);
  }, [debouncedInput]);

  return {
    looking,
    focused,
    setFocused,
    search,
    header,
    input,
    setInput,
    searchHits,
    setSearchHits,
    handleBlur,
    handleFocus,
    showSearchBox,
    setShowSearchBox,
  };
};

export default useSearch;
