# 로지스팟 화주용 — 노션 페이지 HTML

- 공개 사이트: https://ilil1.github.io/ilil1/
- 원문: https://app.notion.com/p/2fbdff352c1480e5bccafcc4df3dc583
- 배포 위치: `main` 브랜치의 `/docs` 디렉터리
- 배포 방식: GitHub Pages → Deploy from a branch

노션 원문의 문구, 순서, 강조, 링크, 줄바꿈과 목록을 유지한 정적 HTML 페이지입니다. 원문의 흰 배경, 가운데 정렬된 문서 폭, 회색 섹션 제목, 구분선 서식을 재현합니다. 노션 서비스의 가입·로그인·댓글 UI는 포함하지 않습니다. 모바일에서는 본문 좌우 여백이 줄어듭니다.

## 파일

- `docs/index.html`: 원문 내용과 링크
- `docs/styles.css`: 노션 문서 서식과 모바일·인쇄 스타일
- `docs/.nojekyll`: 정적 파일을 그대로 배포하도록 설정

외부 글꼴, JavaScript, 빌드 도구 또는 패키지 설치 없이 동작합니다.

## 로컬 미리보기

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory docs
```

http://127.0.0.1:4173 에 접속합니다.

## 수정과 배포

`docs/` 파일을 수정한 후 `main`에 커밋하고 푸시하면 GitHub Pages가 자동으로 배포합니다. 배포 결과는 저장소의 Actions 또는 Settings → Pages에서 확인할 수 있습니다. 노션 원문 변경은 자동 동기화되지 않습니다.
