type LanguageDescriptor = {
  name: string;
  title: string;
};

export type LanguageConfig = {
  languages: LanguageDescriptor[];
  defaultLanguage: string;
};
