export const generalTags = (result: any, tag: any) =>
  result
    ? [
        ...result.map(({ id }: any) => ({
          type: tag,
          id,
        })),
        tag,
      ]
    : [tag];
