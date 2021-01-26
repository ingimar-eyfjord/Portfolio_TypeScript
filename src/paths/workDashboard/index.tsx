import React, { useState, useEffect } from "react";
import GitHubService from "../../services/github.service";
import DataLoader from "../../components/loader";
export interface GitHubObject {
  full_name: string;
  html_url: string;
  updated_at: string;
  stargazers_count: number;
}
export interface Events {
  Name: string;
  URL: string;
  stargazers_count: number;
  Events: [
    {
      actor: {
        avatar_url: string;
        display_login: string;
        url: string;
      };
      payload: {
        commits: [
          {
            message: string;
          }
        ];
      };
      type: string;
    }
  ];
  updated_at: string;
}

export default function WorkDashboard(): JSX.Element {
  const [visuals, setVisuals] = useState<JSX.Element[]>();
  useEffect(() => {
    MakeGitContainer();
    async function MakeGitContainer() {
      const Data = await GetGitData();
      if (Data !== undefined) {
        console.log(Data);
        const GithubVisual = Data.map((e, index) => (
          <div key={index} className="container git">
            <div>
              <h3 className="containerHeader">{e.Name}</h3>
              <a href={e.URL}>Link to github</a>
              <p>Stargazers: {e.stargazers_count}</p>
              <p>Last updated: {e.updated_at}</p>
            </div>
            <div>
              <h3 className="containerHeader">Last 5 events</h3>
              {e.Events.map((t, secondIndex) =>
                secondIndex < 5 ? (
                  <div key={secondIndex} className="GitEvent">
                    <p>Type: {t.type}</p>
                    {t.payload.commits
                      ? t.payload.commits.map((r, thirdIndex) => (
                          <p key={thirdIndex}>Message: {r.message}</p>
                        ))
                      : ""}
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        ));
        console.log(GithubVisual);
        setVisuals(GithubVisual);
      }
    }
  }, []);

  async function GetGitData() {
    const GitHubRepos = await GitHubService.GetRepos();
    const O: Array<Events> = [];
    for (let i = 0; i < GitHubRepos.length; i++) {
      const GitHubEvents = await GitHubService.getEventsForRepo(
        GitHubRepos[i].full_name
      );
      console.log("events", GitHubEvents);
      if (GitHubEvents.length > 0) {
        O.push({
          Name: GitHubRepos[i].full_name,
          URL: GitHubRepos[i].html_url,
          stargazers_count: GitHubRepos[i].stargazers_count,
          updated_at: GitHubRepos[i].updated_at,
          Events: GitHubEvents,
        });
      }
    }
    return O;
  }

  return (
    <div className="dashboardContainer">
      <section className="githubDashBoard">
        <h2>My most recent Github activity</h2>
        {visuals === undefined ? (
          <DataLoader Text={"Fetching data from Github"}></DataLoader>
        ) : (
          visuals
        )}
      </section>
    </div>
  );
}

// 0:
// Events: Array(5)
// 0:
// actor: {id: 48434659, login: "ingimar-eyfjord", display_login: "ingimar-eyfjord", gravatar_id: "", url: "https://api.github.com/users/ingimar-eyfjord", …}
// created_at: "2021-01-08T18:54:03Z"
// id: "14759322846"
// payload: {member: {…}, action: "added"}
// public: true
// repo: {id: 320570296, name: "ingimar-eyfjord/amitylux_animation", url: "https://api.github.com/repos/ingimar-eyfjord/amitylux_animation"}
// type: "MemberEvent"
// __proto__: Object
// 1: {id: "14539250869", type: "PushEvent", actor: {…}, repo: {…}, payload: {…}, …}
// 2: {id: "14539228989", type: "MemberEvent", actor: {…}, repo: {…}, payload: {…}, …}
// 3: {id: "14496368389", type: "CreateEvent", actor: {…}, repo: {…}, payload: {…}, …}
// 4: {id: "14496353737", type: "CreateEvent", actor: {…}, repo: {…}, payload: {…}, …}
// length: 5
// __proto__: Array(0)
// Name: "ingimar-eyfjord/amitylux_animation"
// URL: "https://github.com/ingimar-eyfjord/amitylux_animation"
// stargazers_count: 0
// updated_at: "2020-12-15T11:36:13Z"
