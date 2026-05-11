import { computed, Injectable, signal } from "@angular/core";
import { ArticleObj } from "../modules/article.module";
import { ARTICLES } from "../data/articles-fake-data";


@Injectable({ providedIn: 'root' })

export class ArticlesService {
    articlesstate = signal<ArticleObj[]>(ARTICLES);
    //לקריאה בלבד מבחוץ
    articles = this.articlesstate.asReadonly();

    //שליפת מאמרים לפי משתמש
 getArticlesByUserId(userId: number) {
  return computed(() =>
    this.articlesstate().filter(a => a.userId === userId)
  );
}

    //שליפת מאמר לפי קוד
    getArticleById(articleId: number) {
        return computed(() => this.articlesstate().find(a => a.id === articleId));
    }
    updateStatus(articleId: number) {
        this.articlesstate.update(
            (a) => a.map(
                (art) => art.id === articleId ? { ...art, isPublished: !art.isPublished } 
                : art))
    }
allCompletedByUser = (userId: number) =>
  computed(() => {
    const articles = this.articlesstate().filter(
      a => a.userId === userId
    );

    if (articles.length === 0) return false;

    return articles.every(a => a.isPublished);
  });


}