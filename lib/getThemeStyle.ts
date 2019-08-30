interface Theme {
  [index: string]: string;
}

const getThemeStyle = (prop: string) => ({ theme }: { theme: Theme }) => theme[prop]

export { getThemeStyle as gts }
