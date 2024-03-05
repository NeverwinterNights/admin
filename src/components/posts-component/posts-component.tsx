import React, { useCallback, useEffect, useState } from "react";
import s from "./posts-component.module.scss";
import { DebounceInput, Loader } from "@/components";
import { useGetPostsQuery } from "@/queries/posts.generated";
import { PostItem } from "@/components/posts-component/post-item";
import { useDebounce } from "@/hooks";
import InfiniteScroll from "react-infinite-scroll-component";

export const PostsComponent = () => {
  const [search, setSearch] = useState("");
  const [innerHeight, setInnerHeight] = useState<number>(0);
  const [paddingValue, setPaddingValue] = useState<number>(200);

  const { data, loading, fetchMore } = useGetPostsQuery({
    variables: {
      endCursorPostId: 0,
      pageSize: 8,
      searchTerm: search,
      sortBy: "createAd",
    },
  });

  const endCursorPostId = data?.getPosts.items.slice(-1)[0]?.id;

  const loadMore = useCallback(() => {
    fetchMore({
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newPosts = fetchMoreResult.getPosts.items;
        const { pageSize, pagesCount, totalCount } = fetchMoreResult.getPosts;

        return newPosts.length
          ? {
              getPosts: {
                __typename: previousResult.getPosts.__typename,
                items: [...previousResult.getPosts.items, ...newPosts],
                pageSize,
                pagesCount,
                totalCount,
              },
            }
          : previousResult;
      },
      variables: {
        endCursorPostId,
        pageSize: 4,
        searchTerm: search,
        sortBy: "createAd",
      },
    }).catch(() => {
      console.log("error");
    });
  }, [endCursorPostId, fetchMore, search]);

  const debouncedValue = useDebounce<string>(search, 800);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue]);

  const handleClearSearch = () => {
    setSearch("");
  };

  const mappedPosts = data?.getPosts.items.map((post, index) => {
    return <PostItem key={index} post={post} />;
  });

  useEffect(() => {
    const handleResize = () => {
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const height = window.innerHeight;
      const profileContentHeight = 730;
      const padding = height - profileContentHeight;

      setPaddingValue(padding);
    }
  }, [innerHeight]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={s.root}>
      <DebounceInput
        className={s.input}
        onValueChange={setSearch}
        searchValue={search}
        onClickClearInput={handleClearSearch}
      />
      {/*<div className={s.main}>*/}
      {/*  {data &&*/}
      {/*    data.getPosts.items.map((item) => (*/}
      {/*      <PostItem post={item} key={item.id} />*/}
      {/*    ))}*/}
      {/*</div>*/}
      {!!data?.getPosts.items && !!data?.getPosts.pagesCount && (
        // <div id={"scrollableDiv"}>
        <InfiniteScroll
          className={s.main}
          dataLength={data.getPosts.items.length}
          hasMore={true}
          loader={<Loader />}
          next={loadMore}
          scrollableTarget={"scrollableDiv"}
          style={{ paddingBottom: `${paddingValue}px` }}
        >
          {mappedPosts}
        </InfiniteScroll>
        // </div>
      )}
    </div>
  );
};
