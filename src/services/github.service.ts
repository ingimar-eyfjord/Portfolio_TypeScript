import http from "./github.http.common";

class GitHubService {
  async Emojis() {
    const response = await http.get("/emojis");
    return await response.data;
  }

  async GetRepos() {
    const response = await http.get("/users/ingimar-eyfjord/repos");
    console.log(response.data);
    return await response.data;
  }
  async getEventsForRepo(repo: string) {
    const response = await http.get(`/repos/${repo}/events`);
    console.log(response.data);
    return await response.data;
  }
  async GetCommitEvents(repo: string) {
    const response = await http.get(`/repos/${repo}/stats/commit_activity`);
    console.log(response.data);
    return await response.data;
  }
}

export default new GitHubService();
