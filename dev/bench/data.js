window.BENCHMARK_DATA = {
  lastUpdate: 1622303169702,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: '4ffc513c3fb0c9da6dde3777da02b994ef6e9a20',
          message: 'style: typo',
          timestamp: '2021-05-29T23:36:49+08:00',
          tree_id: 'fd618c2e89937a8f2cce01705d4632cc4e22563d',
          url: 'https://github.com/napi-rs/napi-rs/commit/4ffc513c3fb0c9da6dde3777da02b994ef6e9a20',
        },
        date: 1622303167950,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 49906305,
            range: '±1.26%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 735787385,
            range: '±0.85%',
            unit: 'ops/sec',
            extra: '94 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 11377584,
            range: '±1%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 722707136,
            range: '±0.99%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 87969,
            range: '±21.84%',
            unit: 'ops/sec',
            extra: '70 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 30092,
            range: '±127.56%',
            unit: 'ops/sec',
            extra: '62 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 29200,
            range: '±1.74%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 6992,
            range: '±1.12%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 7122,
            range: '±0.99%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 15446,
            range: '±1.12%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 8485,
            range: '±1.61%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 11592,
            range: '±0.88%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 406242,
            range: '±3.39%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 354145,
            range: '±3.34%',
            unit: 'ops/sec',
            extra: '82 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 360891,
            range: '±2.95%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 328680,
            range: '±3.26%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 30688,
            range: '±6.39%',
            unit: 'ops/sec',
            extra: '71 samples',
          },
          {
            name: 'Async task#thread safe function',
            value: 10183,
            range: '±12.16%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
        ],
      },
    ],
  },
}
