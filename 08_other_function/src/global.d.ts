// React + TypeScript의 경우 css를 모듈화하면 
// import에러가 발생하므로 해당 파일을 만들어 아래와 같이 작성한 후 사용하면 된다.
declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}