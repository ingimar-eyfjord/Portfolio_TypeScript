import http from "./github.http.common";

class GitHubService {
  async Emojis() {
    const response = await http.get("/emojis");
    return await response.data;
  }

  async GetRepos() {
    const response = await http.get("/users/ingimar-eyfjord/repos");
    return await response.data;
  }
  async getEventsForRepo(repo: string) {
    const response = await http.get(`/repos/${repo}/events`);
    return await response.data;
  }
}

export default new GitHubService();
